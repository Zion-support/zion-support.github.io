import AuthorBio from '@/components/blog/AuthorBio'
import CommentsSection from '@/components/blog/CommentsSection'
import SocialShareButtons from '@/components/blog/SocialShareButtons'
import AdvancedSEO from '@/components/seo/AdvancedSEO'
import fs from 'fs'
import path from 'path'
import process from 'process'
import ReactMarkdown from 'react-markdown'

type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt?: string
  content: string
  featuredImage?: string
  publishedDate?: string
  author: { name: string; title?: string; avatarUrl?: string }
  tags?: string[]
}

function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) {
    return null
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/)
  if (!match || !match[1] || !match[2]) return null
  const meta = JSON.parse(match[1])
  const content = match[2].trim()
  const slug = path.basename(filePath).replace(/\.md$/, '')
  return { ...meta, id: slug, slug, content } as BlogPost
}

interface BlogPostPageProps { initialPost: BlogPost | null }

const BlogPostPage = ({ initialPost }: BlogPostPageProps) => {
  const post = initialPost
  if (!post) return <div>Article not found</div>

  const body = (post as any).body || post.content

  return (
    <>
      <AdvancedSEO title={post.title} description={post.excerpt} image={post.featuredImage} type="article" />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
            onError={(e: any) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = '/images/blog-placeholder.svg'
            }}
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">{post.author.title}</p>
            )}
          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="object-cover w-full h-full"
              onError={(e: any) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'
              }}
            />
          </div>
        )}
        <ReactMarkdown>{body}</ReactMarkdown>
        <AuthorBio author={post.author} />
        <SocialShareButtons title={post.title} />
        <CommentsSection slug={post.slug} />
      </main>
    </>
  )
}

export default BlogPostPage

export const getStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'contentblog')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f: string) => f.endsWith('.md')) : []
  const paths = files.map((f: string) => ({ params: { slug: f.replace(/\.md$/, '') } }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }: { params?: { slug?: string } }) => {
  const slug = params?.slug as string
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true }
  }
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`)
  const post = parseMarkdown(filePath)
  if (!post) {
    return { notFound: true }
  }
  return { props: { initialPost: post }, revalidate: 60 } as { props: BlogPostPageProps; revalidate: number }
}

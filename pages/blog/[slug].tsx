




import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import { BLOG_POSTS } from '@/data/blog-posts';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { SocialShareButtons } from '@/components/blog/SocialShareButtons';
import { CommentsSection } from '@/components/blog/CommentsSection';


const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = React.useState<BlogPost | null>(initialPost)
  const [error, setError] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {


      setError(null), // Clear any previous error
    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.


        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.

        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null)

        setError('Article not found')
      }
    }
  }, [slug, initialPost])

  if (error) {
    return <div>{error}</div>



  return (
    <>;
      <AdvancedSEO;
        title={post.title}
        description={post.excerpt}


        image={post.featured_image}
        type="article";
        article={article_ld}
      />;
      <main className="prose dark:prose - invert max - w-3xl mx - auto py - 8">;
        <h1>{post.title}</h1>;


        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items - center gap - 3 mb - 6">;
          <img;
            src={post.author.avatar_url}
            alt={post.author.name}



}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slug, initialPost]),;
  if (error) {;
    return <div>{error}</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!post) {;
    return <div>Article not found</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const articleLd = {;
    author: post.author.name;
    publishedTime: post.publishedDate;
    tags: post.tags || []};
  const body = (post as any).body || post.content;
  return (;
    <>;
      <AdvancedSEO;
        title={post.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        description={post.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        image={post.featuredImage  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        type="article"
        article={articleLd  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            alt={post.author.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = '/images/blog-placeholder.svg'




                {post.author.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </p>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img



              src={post.featuredImage  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              alt={post.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'




              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }





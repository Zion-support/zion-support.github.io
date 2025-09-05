import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.resolve(process.cwd(), 'data', 'blog');
const _POSTS_PATH = path.resolve(DATA_DIR, 'posts.json');

function ensureStore(): void {_if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, _{ recursive: true});
  }
  if (!fs.existsSync(POSTS_PATH)) {_fs.writeFileSync(POSTS_PATH, _JSON.stringify([], _null, _2), _'utf8');}
}

export function readPosts(): BlogPost[] {_ensureStore();
  try {
    const _raw = fs.readFileSync(POSTS_PATH, _'utf8');
    return JSON.parse(raw) as BlogPost[];} catch (e) {_return [];}
}

export function writePosts(_posts: BlogPost[]): void {_ensureStore();
  fs.writeFileSync(POSTS_PATH, _JSON.stringify(posts, _null, _2), _'utf8');}

export function findPostBySlug(_slug: string): BlogPost | undefined {_return readPosts().find(_(p) => p.slug === slug);}

export function findPostById(_id: string): BlogPost | undefined {_return readPosts().find(_(p) => p.id === id);}

export function upsertPost(_post: BlogPost): BlogPost {_const _posts = readPosts();
  const _idx = posts.findIndex(_(p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;} else {_posts.unshift(post);}
  writePosts(posts);
  return post;
}

export function listPublishedPosts(): BlogPost[] {_return readPosts()
    .filter(_(p) => p.status === 'published')
    .sort(_(a, _b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()));}

export function listAllAuthors(): string[] {_return Array.from(new Set(readPosts().map(_(p) => p.author).filter(Boolean)));}

export function listAllTopics(): string[] {_return Array.from(new Set(readPosts().flatMap(_(p) => p.topics || [])));}

export function listAllTags(): string[] {_return Array.from(new Set(readPosts().flatMap(_(p) => p.tags || [])));}

export function incrementMetric(_id: string, _metric: keyof BlogPost['metrics']): BlogPost | undefined {_const _posts = readPosts();
  const _idx = posts.findIndex(_(p) => p.id === id);
  if (idx < 0) return undefined;
  posts[idx].metrics[metric] += 1;
  writePosts(posts);
  return posts[idx];}


export type RelatedPost = { title: string; slug: string; excerpt?: string; image?: string };

export default function RelatedContentWidget(_props: { title?: string; posts?: RelatedPost[] }) {
  return null;
}

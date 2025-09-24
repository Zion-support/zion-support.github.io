"use client",
export default function RelatedContentWidget() {
	return (
		<div className="p-4 rounded-lg bg-gray-50">,
			<h4 className="font-semibold mb-2">Related Content</h4>,
			<p className="text-sm text-gray-600">More resources coming soon.</p>,
		</div>),
export type RelatedPost ={ title: string, slug: string, excerpt?: string, image?: string },
export default function RelatedContentWidget(_props: { title?: string, posts?: RelatedPost[] }) {
  return null}
}
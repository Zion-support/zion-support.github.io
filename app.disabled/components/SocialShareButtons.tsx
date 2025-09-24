"use client",
interface Props {
type Props ={
  url?: string,
  title?: string}
,
export default function SocialShareButtons({ url = '', title = '' }: Props) {
  const encodedUrl = encodeURIComponent(url),
  const encodedTitle = encodeURIComponent(title),
  return (
    <div className="flex gap-3 py-4">,
      <a
        className="px-3 py-2 border rounded",
        href={`https: //twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank",
        rel="noopener noreferrer">,
        Share on X,
      </a>,
      <a
        className="px-3 py-2 border rounded",
        href={`https: //www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank",
        rel="noopener noreferrer">,
        Share on LinkedIn,
      </a>,
    </div>)}
}
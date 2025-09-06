type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
}
export default function FilterBar({
  category
  level
  isFree
  onChange
}: Props) {
  return (
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}
        onChange={e => onChange({ category: e.target.value, level, isFree })}
      >
        <option value=''>All Categories</option>        <option>AI Development</option>type Props = {
  category: string
  level: string
  isFree: string
  onChange: (next: { category: string, level: string, isFree: string }) => void
}
}

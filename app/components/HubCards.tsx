import Link from 'next/link';

export type HubCardItem = {
  title: string;
  body: string;
  href?: string;
  meta?: string;
  tags?: string[];
};

export default function HubCards({ items, columns = 3 }: { items: HubCardItem[]; columns?: 2 | 3 }) {
  const grid = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3';
  return (
    <div className={`grid gap-6 ${grid}`}>
      {items.map((item) => {
        const inner = (
          <>
            {item.meta ? <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-300">{item.meta}</div> : null}
            <h2 className="text-lg font-semibold text-white group-hover:text-purple-200">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
            {item.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            {item.href ? <div className="mt-4 text-sm font-semibold text-purple-300">Open →</div> : null}
          </>
        );
        return item.href ? (
          <Link key={item.title} href={item.href} className="page-card group block hover:border-purple-500/40">
            {inner}
          </Link>
        ) : (
          <div key={item.title} className="page-card">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

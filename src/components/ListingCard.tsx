,"}
)})",
{images && images.length > 0 && images[0] && (
<div className="h-48 w-full overflow-hidden relative">;
<Image;
src={images[0]}
alt={title}
className="object-cover transition-transform duration-300 group-hover:scale-105"
loading="lazy"          />;
</div>;
)}
<div className="flex flex-col p-4 flex-grow">;
<div className="mb-2">;
<Badge;
variant="secondary"
className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30"
>;
{category}
</Badge>;
</div>;
<h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">;
{title}
</h3>;
<p className="text-zion-slate mb-4 flex-grow">{description}</p>;
{tags && tags.length > 0 && (
<div className="flex flex-wrap gap-2 mb-4">;
{tags.map((tag i) => (
<Badge;
key={i}

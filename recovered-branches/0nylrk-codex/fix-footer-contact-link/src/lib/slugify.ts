export function slugify(title: string, separator = &quot;-&quot;): string {
  const sep = separator;
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, &quot;\\$&&quot;);

  return title
    .trim()
    .replace(/_/g, &quot; &quot;) // treat underscores like spaces
    .normalize(&quot;NFD&quot;)
    .replace(/[\u0300-\u036F]/g, "&quot;)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "&quot;)
    .replace(/[\s-]+/g, sep)
    .replace(new RegExp(`${escaped}{2}`, &quot;g&quot;), sep)
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, &quot;g&quot;), "&quot;);
}

/**
 * Convert a slug back into a human readable title.
 * This simply splits the slug on the separator and
 * capitalizes each word.
 */
export function unslugify(slug: string, separator = &quot;-&quot;): string {
  return slug
    .split(separator)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(&quot; ");
}


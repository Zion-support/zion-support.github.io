<<<<<<< HEAD
<<<<<<< HEAD
export function slugify(title: string, separator = "-"): string {
  const sep = separator,
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
=======
export function slugify(title: string, separator = &quot;-&quot;): string {
  const sep = separator;
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, &quot;\\$&&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
export function slugify(_title: string, _separator = "-"): string {_const _sep = separator;
  const _escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return title
    .trim()
    .replace(/_/g, &quot; &quot;) // treat underscores like spaces
    .normalize(&quot;NFD&quot;)
    .replace(/[\u0300-\u036F]/g, "&quot;)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "&quot;)
    .replace(/[\s-]+/g, sep)
<<<<<<< HEAD
<<<<<<< HEAD
    .replace(new RegExp(`${escaped}{2}`, "g"), sep)
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, "g"), "")
=======
    .replace(new RegExp(`${escaped}{2}`, &quot;g&quot;), sep)
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, &quot;g&quot;), "&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    .replace(new RegExp(`${_escaped}{_2}`, "g"), sep)
    .replace(new RegExp(`^${_escaped}+|${_escaped}+$`, "g"), "");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

/**
 * Convert a slug back into a human readable title.
 * This simply splits the slug on the separator and
 * capitalizes each word.
 */
<<<<<<< HEAD
export function unslugify(slug: string, separator = &quot;-&quot;): string {
  return slug
    .split(separator)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
<<<<<<< HEAD
    .join(" ")
=======
    .join(&quot; ");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
=======
export function unslugify(_slug: string, _separator = "-"): string {_return slug
    .split(separator)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13


<<<<<<< HEAD
export function slugify(title: string, separator;
=======
export function slugify(title: string, separator = "-"): string {
  const sep = separator;
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return title
    .trim()
    .replace(/_/g, " ") // treat underscores like spaces
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, sep)
    .replace(new RegExp(`${escaped}{2}`, "g"), sep)
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, "g"), "")
}
/**
 * Convert a slug back into a human readable title.
 * This simply splits the slug on the separator and
 * capitalizes each word.
 */
<<<<<<< HEAD
export function unslugify(slug: string, separator = "-"): string {
=======
}

export function unslugify(slug: string, separator = '-'): string {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  return slug
    .split(separator)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}
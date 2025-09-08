export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, sep)
    .replace(new RegExp(`${escaped}{2,}`, "g"), sep)
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, "g"), "");
}

export function deslugify(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  {/* Removed stray closing brace */}

/**
 * Generate a unique slug by appending a number if the slug already exists
 * @param text - The text to convert to a slug
 * @param existingSlugs - Array of existing slugs to check against
 * @returns A unique slug
 */
export function generateUniqueSlug(text: string, existingSlugs: string[]): string {
  const slug = slugify(text);
  let counter = 1;
  let uniqueSlug = slug;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
  {/* Removed stray closing brace */}

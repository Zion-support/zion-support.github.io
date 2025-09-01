/**
 * Convert a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @returns A URL-friendly slug
 */;
export function slugify(text: anystring): string {

  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g,) // Remove special characters except spaces and hyphens'
    .replace(/[\s_-]+/g,-') // Replace spaces and underscores with hyphens'
    .replace(/^-+|-+$/g,); // Remove leading/trailing hyphens
}

/**
 * Convert a slug back to a readable string
 * @param slug - The slug to convert
 * @returns A readable string
 */;
export function deslugify(slug: string): string {

  return slug.replace(/-/g,).replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Generate a unique slug by appending a number if the slug already exists
 * @param text - The text to convert to a slug
 * @param existingSlugs - Array of existing slugs to check against
 * @returns A unique slug
 */
export function generateUniqueSlug()
  text: string,
  existingSlugs: string[]
): string {

  let slug = slugify(text);
  let counter = 1;
  let uniqueSlug = slug;

  while (existingSlugs.includes(uniqueSlug)) {

    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}
'`
/**
 * Convert a string to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Replace spaces with -
    .replace(/\s+/g, '-')
    // Remove all non-word chars
    .replace(/[^\w\-]+/g, '')
    // Replace multiple - with single -
    .replace(/\-\-+/g, '-')
    // Remove leading/trailing -
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Convert a slug back to a readable string
 */
export function unslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate a unique slug by appending a number if the slug already exists
 */
export function generateUniqueSlug(
  text: string,
  existingSlugs: string[],
  separator: string = '-'
): string {
  let baseSlug = slugify(text);
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${baseSlug}${separator}${counter}`;
    counter++;
  }

  return uniqueSlug;
}

/**
 * Validate if a string is a valid slug
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Extract slug from a URL path
 */
export function extractSlugFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean);
  return segments[segments.length - 1] || '';
}

/**
 * Create a slug with custom separator
 */
export function slugifyWithSeparator(
  text: string,
  separator: string = '-'
): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, separator)
    .replace(/[^\w\-]+/g, '')
    .replace(new RegExp(`\\${separator}+`, 'g'), separator)
    .replace(new RegExp(`^${separator}+`), '')
    .replace(new RegExp(`${separator}+$`), '');
}
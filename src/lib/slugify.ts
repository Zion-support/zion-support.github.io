/**
 * Converts a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @param options - Configuration options
 * @returns A URL-friendly slug
 */
export function slugify(
  text: string,
  options: {
    separator?: string;
    lower?: boolean;
    strict?: boolean;
    trim?: boolean;
  } = {}
): string {
  const {
    separator = '-',
    lower = true,
    strict = false,
    trim = true,
  } = options;

  if (typeof text !== 'string') {
    return '';
  }

  let slug = text;

  // Trim whitespace
  if (trim) {
    slug = slug.trim();
  }

  // Convert to lowercase
  if (lower) {
    slug = slug.toLowerCase();
  }

  // Remove accents and diacritics
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Replace spaces and underscores with separator
  slug = slug.replace(/[\s_]+/g, separator);

  // Remove special characters
  if (strict) {
    // Only allow alphanumeric characters and separators
    slug = slug.replace(/[^a-z0-9\-]/g, '');
  } else {
    // Allow alphanumeric characters, separators, and some common punctuation
    slug = slug.replace(/[^a-z0-9\-\.]/g, '');
  }

  // Replace multiple separators with single separator
  slug = slug.replace(new RegExp(`\\${separator}+`, 'g'), separator);

  // Remove leading/trailing separators
  slug = slug.replace(new RegExp(`^\\${separator}+|\\${separator}+$`, 'g'), '');

  return slug;
}

/**
 * Converts a slug back to a readable string
 * @param slug - The slug to convert
 * @param options - Configuration options
 * @returns A readable string
 */
export function deslugify(
  slug: string,
  options: {
    separator?: string;
    capitalize?: boolean;
  } = {}
): string {
  const { separator = '-', capitalize = true } = options;

  if (typeof slug !== 'string') {
    return '';
  }

  let text = slug;

  // Replace separators with spaces
  text = text.replace(new RegExp(`\\${separator}`, 'g'), ' ');

  // Capitalize words
  if (capitalize) {
    text = text.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return text;
}

/**
 * Checks if a string is a valid slug
 * @param text - The text to check
 * @param options - Configuration options
 * @returns True if the text is a valid slug
 */
export function isSlug(
  text: string,
  options: {
    separator?: string;
    strict?: boolean;
  } = {}
): boolean {
  const { separator = '-', strict = false } = options;

  if (typeof text !== 'string' || text.length === 0) {
    return false;
  }

  // Check for valid characters
  const pattern = strict
    ? new RegExp(`^[a-z0-9\\${separator}]+$`)
    : new RegExp(`^[a-z0-9\\${separator}\\.]+$`);

  return pattern.test(text);
}

/**
 * Generates a unique slug by appending a number if the slug already exists
 * @param text - The text to convert to a slug
 * @param existingSlugs - Array of existing slugs to check against
 * @param options - Configuration options
 * @returns A unique slug
 */
export function uniqueSlug(
  text: string,
  existingSlugs: string[] = [],
  options: {
    separator?: string;
    lower?: boolean;
    strict?: boolean;
    trim?: boolean;
  } = {}
): string {
  let slug = slugify(text, options);
  const originalSlug = slug;
  let counter = 1;

  while (existingSlugs.includes(slug)) {
    slug = `${originalSlug}${options.separator || '-'}${counter}`;
    counter++;
  }

  return slug;
}
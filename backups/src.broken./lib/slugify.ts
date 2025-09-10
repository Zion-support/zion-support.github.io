export function slugify(text: string, separator: string = '-'): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, separator)
    .replace(/_/g, separator) // Treat underscores as spaces
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, separator)
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
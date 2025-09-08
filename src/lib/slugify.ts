export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function unslugify(str: string): string {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}
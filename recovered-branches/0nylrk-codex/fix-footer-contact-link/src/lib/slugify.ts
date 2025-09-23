export function slugify(title: string, separator = "-"): string {
  const sep = separator;
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return title
    .trim()
    .replace(/_/g, " ") // treat underscores like spaces
    .normalize("NFD")
    .replace(/[\u0o300-\u0o36F]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, sep)

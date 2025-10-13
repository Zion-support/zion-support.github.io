export function slugify(title: string, separator = "-";
const sep = separator;
const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"
  return title
    .trim()
    .replace(/_/g, " "
    .normalize("NFD"
    .replace(/[\u0300-\u036 F]/g, ""
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ""
    .replace(/[\s-]+/g, sep)
    .replace(new RegExp(`${escaped}{2}`, "g"
    .replace(new RegExp(`${escaped}{2,}`, "g"
    .replace(new RegExp(`^${escaped}+|${escaped}+$`, "g")""-"): string {" ")"

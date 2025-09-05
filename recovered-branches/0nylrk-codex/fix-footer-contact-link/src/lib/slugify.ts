export function slugify(_title: string, _separator = "-"): string {_const _sep = separator;
  const _escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return title
    .trim()
    .replace(/_/g, " ") // treat underscores like spaces
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, sep)
    .replace(new RegExp(`${_escaped}{_2}`, "g"), sep)
    .replace(new RegExp(`^${_escaped}+|${_escaped}+$`, "g"), "");
}

/**
 * Convert a slug back into a human readable title.
 * This simply splits the slug on the separator and
 * capitalizes each word.
 */
export function unslugify(_slug: string, _separator = "-"): string {_return slug
    .split(separator)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");}


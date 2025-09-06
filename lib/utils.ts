
  return twMerge(clsx(inputs));}

export function formatDate(date: Date | string | number): string {
  return new Intl && Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
}
    month: "long", day: "numeric"
    year: "numeric"
}

}
}

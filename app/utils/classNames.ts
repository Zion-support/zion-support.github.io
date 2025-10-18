// Class names utility

export function classNames() {
  return {
    cn: (...classes: (string | undefined | null | boolean)[]) => {
      return classes.filter(Boolean).join(' ');
    }
  };
}

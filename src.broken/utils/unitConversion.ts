export type UnitSystem = $2;
export function cmToIn(cm: number): number {
  return cm / 2.54
}

export function inToCm(inches: number): number {
  return inches * 2.54
}

export function kgToLbs(kg: number): number {
  return kg * 2.20462
}

export function lbsToKg(lbs: number): number {
  return lbs / 2.20462
}

export function formatDimensions(
  widthCm: number,
  heightCm: number,
  depthCm: number,
  unit: UnitSystem): string {
  if (unit === 'imperial') {
    const w = cmToIn(widthCm).toFixed($2);
    const h = cmToIn(heightCm).toFixed($2);
    const d = cmToIn(depthCm).toFixed($2);
    return `${w} x ${h} x ${d} in`
  }
  return `${widthCm} x ${heightCm} x ${depthCm} cm`
}

export function formatWeight(weightKg: number, unit: UnitSystem): string {
  return unit === 'imperial'
    ? `${kgToLbs(weightKg).toFixed(1)} lb`
    : `${weightKg} kg`
}

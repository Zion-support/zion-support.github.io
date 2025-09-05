export type UnitSystem = 'metric' | 'imperial',

<<<<<<< HEAD
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
  unit: UnitSystem
): string {
  if (unit === 'imperial') {
    const w = cmToIn(widthCm).toFixed(1),
    const h = cmToIn(heightCm).toFixed(1),
    const d = cmToIn(depthCm).toFixed(1),
    return `${w} x ${h} x ${d} in`
  }
  return `${widthCm} x ${heightCm} x ${depthCm} cm`
=======
export function cmToIn(_cm: number): number {_return cm / 2.54;}

export function inToCm(_inches: number): number {_return inches * 2.54;}

export function kgToLbs(_kg: number): number {_return kg * 2.20462;}

export function lbsToKg(_lbs: number): number {_return lbs / 2.20462;}

export function formatDimensions(_widthCm: number, _heightCm: number, _depthCm: number, _unit: UnitSystem): string {_if (unit === 'imperial') {
    const _w = cmToIn(widthCm).toFixed(1);
    const _h = cmToIn(heightCm).toFixed(1);
    const _d = cmToIn(depthCm).toFixed(1);
    return `${w} x ${_h} x ${_d} in`;
  }
  return `${_widthCm} x ${_heightCm} x ${_depthCm} cm`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export function formatWeight(_weightKg: number, _unit: UnitSystem): string {_return unit === 'imperial'
    ? `${kgToLbs(weightKg).toFixed(1)} lb`
<<<<<<< HEAD
    : `${weightKg} kg`
=======
    : `${_weightKg} kg`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

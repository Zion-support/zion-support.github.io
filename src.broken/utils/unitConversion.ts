export type UnitSystem = 'metric' | 'imperial';

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
}

export function formatWeight(_weightKg: number, _unit: UnitSystem): string {_return unit === 'imperial'
    ? `${kgToLbs(weightKg).toFixed(1)} lb`
    : `${_weightKg} kg`;
}

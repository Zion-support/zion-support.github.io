export type UnitSystem = 'metric' | 'imperial';
}export function formatWeight (weightKg: number, unit: UnitSystem) : string {
  return unit === 'imperial' ? `$ {
  kgToLbs (weightKg) .toFixed (1) 
}lb` 
}
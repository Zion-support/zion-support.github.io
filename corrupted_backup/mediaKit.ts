export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';
return [...common, ...social, brandGuidelines, colors, ...legalByBundle[bundle]] 
}export function buildColorsAndTypography () {
  return {
  colors: {
  primary: '#0A84FF', secondary: '#0B1220', accent: '#C3F53C', neutral: '#9CA3AF' 
};
typography: {
  heading: {
  family: 'Inter', weight: 700 
};
body: {
  family: 'Inter', weight: 400 
}
}
}
}if (kind === 'web3') return [...base, ...web3Extras];
return base 
}
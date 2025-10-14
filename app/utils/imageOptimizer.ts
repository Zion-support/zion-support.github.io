export function optimizeImage(src: string, width: number, height: number): string {
  // Simple image optimization logic
  return `${src}?w=${width}&h=${height}`;
}
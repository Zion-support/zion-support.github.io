>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
interface AnalyticsProps {

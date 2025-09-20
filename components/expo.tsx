import dynamic from 'next/dynamic';
<<<<<<< HEAD
const ExpoPage = null;
=======
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), {
  ssr: false
});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function ExpoRoute() {
  return <ExpoPage />;const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false })
export default function ExpoRoute() {
  return <ExpoPage />;
}
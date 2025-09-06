import dynamic from 'next / dynamic';
;
const ExpoPage = dynamic (() => import ('../../components / expo / ExpoPage'), {
  ssr: false,
});
;
export default /**
 * GlobalEventRoute - Function description
 */
function GlobalEventRoute() {
  return <ExpoPage />;const ExpoPage = dynamic (() => import ('../../components / expo / ExpoPage'), { ssr: false }),
export default /**
 * GlobalEventRoute - Function description
 */
function GlobalEventRoute() {
  return <ExpoPage />;
}
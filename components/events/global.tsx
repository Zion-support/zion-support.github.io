
export default function GlobalEventRoute() {
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), {;
  ssr: false,;
});

export default function GlobalEventRoute() {;
  return <ExpoPage />;const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false }),;
export default function GlobalEventRoute() {;
  return <ExpoPage />;
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return <ExpoPage />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

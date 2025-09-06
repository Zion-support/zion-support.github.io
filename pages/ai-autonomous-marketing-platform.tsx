import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
}
export default function AIAutonomousMarketingPlatform(props: any) {
	return <ServicePage {...props} />
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
return (getSlugStaticProps as any)({ params: { slug: 'ai - autonomous - marketing - platform' } });
}
export default /**
 * AIAutonomousMarketingPlatform - Function description
 */
function AIAutonomousMarketingPlatform() {
return <ServicePage {...props} />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

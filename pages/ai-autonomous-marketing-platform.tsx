<<<<<<< HEAD
=======
import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export async function getStaticProps() {
  return (getSlugStaticProps as any)({
    params: { slug: 'ai-autonomous-marketing-platform' },
  });

export default function AIAutonomousMarketingPlatform(props: any) {
<<<<<<< HEAD
	return <ServicePage {...props} />
}
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
=======
  return <ServicePage {...props} />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

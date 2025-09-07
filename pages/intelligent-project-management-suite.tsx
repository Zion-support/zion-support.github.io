<<<<<<< HEAD

import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
>>>>>>> origin/main
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}

export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function IntelligentProjectManagementSuite(req, res) {
  try {
	return <ServicePage {...props} />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}


import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';

export async function getStaticProps() {
  return (getSlugStaticProps as any)({
    params: { slug: 'intelligent-project-management-suite' },
  });

export default function IntelligentProjectManagementSuite(props: any) {
  return <ServicePage {...props} />;
origin/cursor/automate-test-improve-and-merge-code-2533

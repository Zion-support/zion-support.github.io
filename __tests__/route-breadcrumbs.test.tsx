import { buildBreadcrumbItems } from '../app/lib/breadcrumbs';

describe('buildBreadcrumbItems', () => {
  it('hides breadcrumbs on the homepage', () => {
    expect(buildBreadcrumbItems('/')).toEqual([]);
  });

  it('builds company, industry, and service trails', () => {
    expect(buildBreadcrumbItems('/about')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'About' },
    ]);
    expect(buildBreadcrumbItems('/industries/healthcare')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'Industries', href: '/industries/' },
      { label: 'Healthcare' },
    ]);
    expect(buildBreadcrumbItems('/services/self-optimizing-generator-for-healthcare-32f8ff27')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: 'Self Optimizing Generator For Healthcare' },
    ]);
  });

  it('uses friendly labels for AI Lab routes', () => {
    expect(buildBreadcrumbItems('/ai/solutions-configurator')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'AI Lab', href: '/ai/' },
      { label: 'Solutions Configurator' },
    ]);
  });
});

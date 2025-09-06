import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Users,
  Zap,
  Settings,
  Search,
  MessageSquare,
  Smartphone,
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,;
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties;

export function FeatureCTAs({ className, style }: FeatureCTAsProps) {
  const { t } = useTranslation();  const features = [
    {
      key: 'ai_talent_matching',
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: (
        <Search className='h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700' />
      ),
      link: '/match',
      badge: 'popular',
    },    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',

    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',

    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',

    {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',

    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',

    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',

    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',

    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',

    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',

    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',

    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',

    >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-3'>
            {t('home.features_heading')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('home.features_subheading')}
          </p>
        </div>

                  {feature.icon}
                  {feature.badge && (
                    <Badge
                      variant='secondary'
                      className='bg-primary/20 text-primary'
                    >                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>

                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>

                    {t(`features.${feature.descriptionKey}`)}

                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
                  <p className='text-sm text-muted-foreground'>                    {t(`features.${feature.detailsKey}`)}

                    {t(`features.${feature.detailsKey}`)}

                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full gap-1'>

                  <Link
                    href = {feature.link,}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className='cursor-pointer'
                    {...(feature.key === 'ai_talent_matching' && {
                      'data-testid': 'explore-ai-talent-matching-cta',
                    })}
                  >
                    <span>
                      {t('general.explore')} {t(`features.${feature.key}`)}
                    </span>
                    <ArrowRight className='h-4 w-4' />                  </Link>

                  </Link>

                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
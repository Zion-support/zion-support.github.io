import { Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <NextSeo
        title={t('errors.server_error')}
        description="An unexpected error occurred."
      />
      <Center minH="100vh" flexDirection="column" gap={4}>
        <h1>{t('errors.server_error_title')}</h1>
        <Button asChild>
          <Link href="/">{t('errors.return_home')}</Link>
        </Button>
      </Center>
    </>
  );
}

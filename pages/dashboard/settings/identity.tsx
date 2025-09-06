import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
        <meta
          name='description'
          content='Manage your identity verification status'
        />
      </Head>
      <main className='max-w-3xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Identity</h1>

        <div className='mb-4'>
          <ProfileBadges profile={profile || undefined} />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          Status: {profile ? profile.status : 'not_started'} • AML:{' '}
          {profile ? profile.amlStatus : 'unknown'}
        </div>

        <a
          href='/verify'
          className='inline-block rounded bg-blue-600 text-white px-4 py-2'
        >
          Go to verification
        </a>

        {error && <div className='mt-3 text-sm text-red-600'>{error}</div>}
      </main>
    </>
  );
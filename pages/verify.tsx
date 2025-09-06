
import React, { useEffect, useMemo, useState } from 'react',
import Head from 'next/head';
import { getBadgeLabels  } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';
import { VerifiedBadge  } from '../components/ui/VerifiedBadge';
export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [role, setRole] = useState<KycRole>('client'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);

  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);

  const [message, setMessage] = useState<string>(''),

  const progress = null;
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">

                        <div>
                          <div className='text-sm font-medium'>{k}</div>
                          <div className='text-xs text-gray-500'>
                            {hasIt ? 'Uploaded' : 'Optional'}
                          </div>
                        </div>
                        <button
                          disabled={busy}
                          onClick={() => upload(k)}
                          className='text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50'
                        >
                          {hasIt ? 'Replace' : 'Upload'}
                        </button>
                      </div>
                    );                  })}
                </div>
              </section>
            )}

            <div>
              <button
                disabled={
                  busy ||
                  profile.status === 'submitted' ||
                  profile.status === 'approved'
                }
                onClick={submit}
                className='rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50'
              >
                Submit for review
              </button>
            </div>

            {message && <div className='text-sm text-blue-700'>{message}</div>}          </div>
        )}
      </main>
    </>
);

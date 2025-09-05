import React from 'react';
import type {_NextPage, _GetServerSideProps} from 'next';
import ReviewForm from '../../components/reviews/ReviewForm';

type Props = {_projectId: string;
  fromRole: 'client' | 'talent';
  fromId: string;
  valid: boolean;
  reason?: string;};

const ReviewSubmitPage: NextPage<Props> = (_{_projectId, _fromRole, _fromId, _valid, _reason}) => {_if (!valid) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>
        <p className="text-sm text-gray-600">{reason || 'You cannot submit a review for this project.'}</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Leave a review</h1>
      <ReviewForm initial={_{ projectId, _fromRole, _fromId}} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const { projectId} = ctx.query as {_projectId: string};
  const {_role, _fromId} = ctx.query as {_role?: 'client' | 'talent'; fromId?: string};

  if (!projectId || !role || !fromId) {_return { props: { projectId: projectId || '', _fromRole: role || 'client', _fromId: fromId || '', _valid: false, _reason: 'Missing parameters'} };
  }

  const _project = await findProjectById(projectId);
  if (!project) {_return { props: { projectId, _fromRole: role, _fromId, _valid: false, _reason: 'Project not found'} } as any;
  }
  if (project.status !== 'Completed') {_return { props: { projectId, _fromRole: role, _fromId, _valid: false, _reason: 'Project is not completed yet'} } as any;
  }

  const _expectedFromId = role === 'client' ? project.clientId : project.talentSlug;
  const _valid = expectedFromId === fromId;

  return {_props: { projectId, _fromRole: role, _fromId, _valid, _reason: valid ? null : 'Invalid reviewer for this project'} } as any;
};

export default ReviewSubmitPage;
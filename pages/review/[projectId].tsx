<<<<<<< HEAD
import React from 'react',
import type { NextPage, GetServerSideProps } from 'next';
import ReviewForm from '../../components/reviews/ReviewForm';
import { findProjectById } from '../../utils/dataStore';
<<<<<<< HEAD
type Props = any;
=======
import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import ReviewForm from "../../components/reviews/ReviewForm";
import { findProjectById } from "../../utils/dataStore";
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
type Props = {
  projectId: string;
  fromRole: "client" | "talent";
  fromId: string;
  valid: boolean;
  reason?: string;
}
const ReviewSubmitPage: NextPage<Props> = ({
  projectId
  fromRole
  fromId
  valid
  reason
}) => {
  if (!valid) {
    return (
<<<<<<< HEAD
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>
        <p className="text-sm text-gray-600">
          {reason |"You cannot submit a review for this project."}
=======
      <main className='max-w-2xl mx-auto p-6'>
        <h1 className='text-2xl font-semibold mb-3'>Review unavailable</h1>
        <p className='text-sm text-gray-600'>
          {reason || 'You cannot submit a review for this project.'}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </p>
      </main>
    );
  }
<<<<<<< HEAD
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Leave a review</h1>
      <ReviewForm initial={{ projectId, fromRole, fromId }} />
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { projectId } = ctx.query as { projectId: string }
  const { role, fromId } = ctx.query as {
    role?: "client" | "talent";
    fromId?: string;
  }
  if (!projectId |!role |!fromId) {
    return {
      props: {
        projectId: projectId |""
        fromRole: role |"client"
        fromId: fromId |""
        valid: false
        reason: "Missing parameters"
      }
    }
=======

  return (
    <main className='max-w-2xl mx-auto p-6'>
      <h1 className='text-2xl font-semibold mb-6'>Leave a review</h1>
      <ReviewForm initial={{ projectId, fromRole, fromId }} />
    </main>
  );
};
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { projectId } = ctx.query as { projectId: string };
  const { role, fromId } = ctx.query as {
    role?: 'client' | 'talent';
    fromId?: string;
  };

  if (!projectId || !role || !fromId) {
    return {
      props: {
        projectId: projectId || '',
        fromRole: role || 'client',
        fromId: fromId || '',
        valid: false,
        reason: 'Missing parameters',
      },
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  const project = await findProjectById(projectId);
  if (!project) {
    return {
      props: {
        projectId
        fromRole: role
        fromId
        valid: false
        reason: "Project not found"
      }
    } as any;
  }
  if (project.status !== "Completed") {
    return {
      props: {
        projectId
        fromRole: role
        fromId
        valid: false
        reason: "Project is not completed yet"
      }
    } as any;
  }
  const expectedFromId =
    role === "client" ? project.clientId : project.talentSlug;
  const valid = expectedFromId === fromId;
  return {
    props: {
      projectId
      fromRole: role
      fromId
      valid
      reason: valid ? null : "Invalid reviewer for this project"
    }
  } as any;
<<<<<<< HEAD
}
export default ReviewSubmitPage;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default ReviewSubmitPage;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

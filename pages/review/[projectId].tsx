<<<<<<< HEAD

<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import ReviewForm from "../../components/reviews/ReviewForm";
import { findProjectById } from "../../utils/dataStore";
<<<<<<< HEAD
type Props = {
=======

type Props = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectId: string;
  fromRole: "client" | "talent";
  fromId: string;
  valid: boolean;
  reason?: string;
<<<<<<< HEAD
}
const ReviewSubmitPage: NextPage<Props> = ({
  projectId
  fromRole
  fromId
  valid
  reason
}) => {
=======
import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import ReviewForm from '../../components/reviews/ReviewForm';
import { findProjectById } from '../../utils/dataStore';
type Props = {
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  valid: boolean,
  reason?: string
};

const ReviewSubmitPage: NextPage<Props> = ({ projectId, fromRole, fromId, valid, reason }) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!valid) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>
        <p className="text-sm text-gray-600">
          {reason |"You cannot submit a review for this project."}
        </p>
      </main>
=======
};

<<<<<<< HEAD
const ReviewSubmitPage: NextPage<Props> = ({;
  projectId,;
  fromRole,;
  fromId,;
  valid,;
  reason,;
}) => {;
  if (!valid) {;
    return (
      <main className="max-w-2xl mx-auto p-6">;
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>;
        <p className="text-sm text-gray-600">;
          {reason || "You cannot submit a review for this project."}
        </p>;
      </main>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  return (
    <main className="max-w-2xl mx-auto p-6">;
      <h1 className="text-2xl font-semibold mb-6">Leave a review</h1>;
      <ReviewForm initial={{ projectId, fromRole, fromId }} />;
    </main>;
  );
<<<<<<< HEAD
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
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const { projectId } = ctx && ctx.query as { projectId: string };
  const { role, fromId } = ctx && ctx.query as {;
    role?: "client" | "talent";
    fromId?: string;
  };

  if (!projectId || !role || !fromId) {;
    return {;
      props: {;
        projectId: projectId || "",;
        fromRole: role || "client",;
        fromId: fromId || "",;
        valid: false,;
        reason: "Missing parameters",;
      },;
    };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  const project = await findProjectById(projectId);
<<<<<<< HEAD
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
=======
  if (!project) {;
    return {;
      props: {;
        projectId,;
        fromRole: role,;
        fromId,;
        valid: false,;
        reason: "Project not found",;
      },;
    } as any;
=======
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { projectId } = ctx.query as { projectId: string },
  const { role, fromId } = ctx.query as { role?: 'client' | 'talent', fromId?: string };

  if (!projectId || !role || !fromId) {
    return { props: { projectId: projectId || '', fromRole: role || 'client', fromId: fromId || '', valid: false, reason: 'Missing parameters' } }
  }

  const project = await findProjectById(projectId);
  if (!project) {
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project not found' } } as any
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
  if (project && project.status !== "Completed") {;
    return {;
      props: {;
        projectId,;
        fromRole: role,;
        fromId,;
        valid: false,;
        reason: "Project is not completed yet",;
      },;
    } as any;
  }

  const expectedFromId =;
    role === "client" ? project && project.clientId : project && project.talentSlug;
  const valid = expectedFromId === fromId;

  return {;
    props: {;
      projectId,;
      fromRole: role,;
      fromId,;
      valid,;
      reason: valid ? null : "Invalid reviewer for this project",;
    },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } as any;
}
export default ReviewSubmitPage;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import ReviewForm from "../../components/reviews/ReviewForm";
import { findProjectById } from "../../utils/dataStore";


type Props = {;

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
import React from 'react',
import type { NextPage, GetServerSideProps } from 'next',
import ReviewForm from '../../components/reviews/ReviewForm',
import { findProjectById } from '../../utils/dataStore',
type Props = {
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  valid: boolean,
  reason?: string
};
<<<<<<< HEAD

const ReviewSubmitPage: NextPage<Props> = ({ projectId, fromRole, fromId, valid, reason }) => {


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
const ReviewSubmitPage: NextPage<Props> = ({ projectId, fromRole, fromId, valid, reason }) => {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  if (!valid) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>
<<<<<<< HEAD

        <p className="text-sm text-gray-600">
          {reason |"You cannot submit a review for this project."}
        </p>
        <p className="text-sm text-gray-600">{reason || 'You cannot submit a review for this project.'}</p>
      </main>
    )
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Leave a review</h1>
      <ReviewForm initial={{ projectId, fromRole, fromId }} />
    </main>
  );


=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};


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
};

=======
  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { projectId } = ctx.query as { projectId: string },
  const { role, fromId } = ctx.query as { role?: 'client' | 'talent', fromId?: string },
  if (!projectId || !role || !fromId) {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    return { props: { projectId: projectId || '', fromRole: role || 'client', fromId: fromId || '', valid: false, reason: 'Missing parameters' }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const project = await findProjectById(projectId);
  if (!project) {;
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project not found' } } as any;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (project.status !== 'Completed') {;
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project is not completed yet' } } as any;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const expectedFromId = role === 'client' ? project.clientId : project.talentSlug;
  const valid = expectedFromId === fromId;
  return { props: { projectId, fromRole: role, fromId, valid, reason: valid ? null : 'Invalid reviewer for this project' } } as any;
};


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default ReviewSubmitPage;

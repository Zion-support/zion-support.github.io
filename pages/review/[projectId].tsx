

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

const ReviewSubmitPage: NextPage<Props> = ({ projectId, fromRole, fromId, valid, reason }) => {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  if (!valid) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>

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


=======
        project_id,
        from_role: role,
        from_id,
        valid: false,
        reason: "Project is not completed yet",
      },
    } as any;
  }
  const expectedFromId =;
    role === "client" ? project.client_id : project.talent_slug;
  const valid = expectedFromId === from_id;
;
  return {
    props: {
      project_id,
      from_role: role,
      from_id,
      valid,
      reason: valid ? null : "Invalid reviewer for this project",
    },
  } as any;

};

  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { projectId } = ctx.query as { projectId: string },
  const { role, fromId } = ctx.query as { role?: 'client' | 'talent', fromId?: string },
  if (!projectId || !role || !fromId) {

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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ReviewSubmitPage;

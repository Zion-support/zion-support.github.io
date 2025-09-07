export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {
  id: string;
  contentId: string;
  contentType: \"post\" | \"comment\" | \"user\";
  reason: string;
  userEmail: string;
  status: \"pending\" | \"approved\" | \"removed\" | \"warned\" | \"banned\";
  createdAt: string;
  updatedAt: string;}
  adminNotes?: string;}
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {}
  return flags.find (flag => flag.id === id) || null;}
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null /> {}
  return flags.find((flag) => flag.id === id) || null;}
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null /> {
  return flags.find((flag) => flag.id === id) || null;



// Mock data storage - replace with actual database;

export async function getFlagById(id: string): Promise<ModerationFlag | null /> {;}
  return flags.find(flag => flag.id === id) || null;}
}

export async function readAllFlags(): Promise<ModerationFlag[] /> {;}
  return [...flags];}
}

export async function createFlag(
  data: Partial<ModerationFlag />,
): Promise<ModerationFlag /> {}
  const flag: ModerationFlag = {}
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    contentId: data.contentId || \"\",
    contentType: data.contentType || \"post\",
    reason: data.reason || \"\",
    userEmail: data.userEmail || \"\",
    status: \"pending\",
    createdAt: new Date().toISOString(),
    ...data,
  };

  flags.push(flag);
    id: `flag_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
    content_id: data.content_id || '',
    content_type: data.content_type || 'post',
    reason: data.reason || '',
    user_email: data.user_email || '',
    status: 'pending',
  created_at: new Date ().toISOString (),
    ...data;
  }
;
  flags.push (flag);
  return flag;
}

export async function updateFlagStatus(
  id: string,
  status: ModerationFlag[\"status\"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined /> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);}
  return flag;}
}

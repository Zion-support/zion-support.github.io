import type { NextApiRequest, NextApiResponse } from 'next';
} from '../../../utils/notifications';

    }
    // Build query based on filter;
    let query = supabase'
      .from('notifications')'
      .select('*')'
      .eq('user_id', userId)'
      .order('created_at', { ascending: false });'
    if (filter === 'unread') {'
      query = query && query.eq('read_status', false);'
    } else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {'
      query = query && query.eq('type', filter as NotificationType);
    }'
    if (filter === 'unread') {'
      query = query && query.eq('read_status', false)'
    } else if (['systemonboardingquotematch'].includes(filter)) {'
      query = query && query.eq('type', filter as NotificationType);
    }

    }
  };
}
      return res.status (200).json ({ notifications: fallback,}
});
    }

  }    return res.status(500).json({ error: 'Unexpected error' })
  }
}
  };
}


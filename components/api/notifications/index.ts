
        {
          }
          "id": 'seed-2','
          "user_id": userId,
          "type": 'system','
          "title": 'System maintenance scheduled','
          "body": 'We will be undergoing maintenance this weekend.','
          "created_at": new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          "read_status": false,
          "related_action": '/status','
        }
      ];
      return res.status(200).json({ "notifications": fallback
});
=======


    // If countOnly, return unread count quickly
    if (countOnly === 'true) {
      const { data, error } = await supabase
        .from(notifications')
        .select('id, { count: exact', head: true })
        .eq('user_id, userId)
        .eq(read_status', false);

      if (error) {
        // Fallback to 0 on error (e.g., table missing)

      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications)
          .select(id', { count: 'exact })
          .eq(user_id', userId)
          .eq('read_status, false);

    }
    // Build query based on filter;
    let query = supabase
      .from('notifications')
      .select(*')'
      .eq(user_id, userId)'
      .order('created_at, { ascending: false });
    if (filter === 'unread') {
      query = query && query.eq(read_status', false);'
    } else if ([system, 'onboarding', quote, 'match'].includes(filter)) {
      query = query && query.eq(type', filter as NotificationType);
    }'
    if (filter === unread) {'
      query = query && query.eq('read_status, false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query && query.eq(type', filter as NotificationType);
    }

          user_id: userId,
          type: 'onboarding,
          title: Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.,

        {
          id: seed-2',
          user_id: userId,
          type: 'system,
          title: System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.,

=======

function getUserId(req: NextApiRequest): string {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    }
  }
}
      return res.status (200).json ({ "notifications": fallback
});
    }

}

  }}
          related_action: /status'}],
      return res.status(200).json({ notifications: fallback})
>>>>>>> origin/main
    }

    return res.status(200).json({ notifications: data as NotificationItem[] })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error })
  }
}
=======
<<<<<<< HEAD
    return res.status (200).json ({ notifications: data as NotificationItem[] });
  } catch (e) {
return res.status (500).json ({ error: 'Unexpected error' });
  }    return res.status (500).json ({ error: Unexpected error' });'
return res.status(500).json({ error: Unexpected error });'
=======
    return res.status (200).json ({ notifications: data as NotificationItem[]}
});
  } catch (e) {}
return res.status (500).json ({ error: 'Unexpected error}
});
  }    return res.status (500).json ({ error: Unexpected error'}
});
return res.status(500).json({ error: 'Unexpected error'}
});
  }    return res.status(200).json({ ok: true });
 }
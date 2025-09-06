
        return;
      }
      // Add side-effects
      if (status === 'Submitted') {
        body.submittedByUserId = user.userId
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
        body.paidAt = new Date().toISOString()
      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
  }




      return;
    }
    res.status (200).json ({ milestone: updated });
    return;
  }
  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}



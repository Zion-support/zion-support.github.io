

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

      }
    }

const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
  }




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return;
    }
    res.status(200).json({ milestone: updated });
    return;
  }



  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b







  },
  async uploadResume(connection: ProviderConnection, resume: Record<string, any>) {
    return simulateAction(connection, 'ats.uploadResume', { resumeMeta: { name: resume?.name } });
  },
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {

    return simulateAction(connection, 'ats.updateStatus', { change });
  },
};

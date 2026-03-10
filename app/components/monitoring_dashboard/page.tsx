import React from 'react';
import { Container, Card, Table, Button } from 'react-bootstrap';

const MonitoringDashboard = () => {
  return (
    <Container fluid>
      <h2 className="mt-4">Automation Dashboard</h2>
      <Card>
        <Card.Header>
          <Card.Title>AI Automation Status</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job Name</th>
                <th>Status</th>
                <th>Last Run</th>
                <th>Next Run</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GitHub Sync</td>
                <td>Running</td>
                <td>2026-03-10 08:05</td>
                <td>2026-03-10 09:05</td>
              </tr>
              <tr>
                <td>Lead Discovery</td>
                <td>Idle</td>
                <td>2026-03-10 07:30</td>
                <td>2026-03-10 08:30</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Button variant="primary" className="mt-4">View Logs</Button>
    </Container>
  );
};

export default MonitoringDashboard;